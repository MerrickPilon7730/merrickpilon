

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
} from "@/components/ui/card";

type Props ={
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({isOpen, onClose}: Props) {
    if (!isOpen) return null;

    return(
        <div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center overflow-auto"
            onClick={onClose}
        >
            <div className="w-[90%] max-w-4xl"  onClick={(e) => e.stopPropagation()}>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Title
                        </CardTitle>
                    </CardHeader>
                    <CardContent >
                        Content
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};